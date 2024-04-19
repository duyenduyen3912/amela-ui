import { Button, Form, Input, message, Modal, Spin, Table } from 'antd';
import { addNewPost, getListPost } from 'api/task';
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import styles from "./styles.module.scss"

const {TextArea} = Input

interface DataType {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export default function ReactQuery() {
    const [form] = Form.useForm()
    const [dataSource, setDataSource] = useState<DataType[]>()
    const {data: dataTable, isFetching} = useQuery(['posts'], () => getListPost())
    const addPostMutation = useMutation(
        async (payload) => await addNewPost(payload),
        {
            onSuccess: (data) => {
                message.success("Thêm bài viết thành công!")
                setDataSource(
                    [
                        data,
                        ...dataSource || []
                    ]
                )
            },
            onError: (data) => {
                message.error("Có lỗi xảy ra, vui lòng thử lại sau!")
            }
        }
    )
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const columns = [
    {
        title: 'User id',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
    },
    ];
    const onFinish = (values: any) => {
        addPostMutation.mutate(values)
        setTimeout(()=> {
            form.resetFields()
        },1000)
      };
    useEffect(() => {
        if(dataTable) {
            setDataSource(dataTable)
        }
    }, [dataTable])
  return (
    <div className={styles.wrapper}>
        <div className={styles.btnWrap}>
            <Button type="primary" onClick={showModal}>Tạo bài viết</Button>
        </div>
        <Spin spinning={isFetching}>
            <Table dataSource={dataSource} columns={columns} />
        </Spin>
        <Modal 
            title="Thêm bài viết" 
            visible={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={false}
        >
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
                form={form}
            >
                <Form.Item
                    label="User id"
                    name="userId"
                    rules={[{ required: true, message: 'Please input your id!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Id"
                    name="id"
                    rules={[{ required: true, message: 'Please input your id!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                label="Body"
                name="body"
                rules={[{ required: true, message: 'Please input your body!' }]}
                >
                    <TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={handleCancel}>
                    Submit
                </Button>
                </Form.Item>
            </Form>   
        </Modal>
    </div>
  )
}
