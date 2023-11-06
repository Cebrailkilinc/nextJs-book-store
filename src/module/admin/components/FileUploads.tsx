import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const props: UploadProps = {
    name: 'file',    
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
      console.log("first")
    },
};

const FileUploads = () => {

    return (
        <div>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
    )
}

export default FileUploads