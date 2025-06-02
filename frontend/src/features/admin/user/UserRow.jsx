import { useState } from "react";
import Table from "../../../ui/Table";
import { toPersianNumbers } from "../../../utils/toPersionNumbers";
import Modal from '../../../ui/Modal'
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
    {
        className: 'badge--error',
        title: 'رد شده'
    },
    {
        className: 'badge--secondary',
        title: 'در انتظار تایید'
    },
    {
        className: 'badge--success',
        title: 'تایید شده'
    }
]

function UserRow({ index, user }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Table.Row>
            <th>{index + 1}</th>
            <th>{user.name}</th>
            <th>{user.email}</th>
            <th>{toPersianNumbers(user.phoneNumber)}</th>
            <th>{user.role}</th>
            <th>
                <span className={`badge ${statusStyle[user.status].className}`}>
                    {statusStyle[user.status].title}
                </span>
            </th>
            <th>
                <button onClick={() => setIsOpen(true)} className='text-secondary-800 font-bold'>تغییر وضعیت</button>
                <Modal
                    title='تغییر وضعیت کاربر'
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <ChangeUserStatus id={user._id} onClose={() => setIsOpen(false)}/>
                </Modal>
            </th>
        </Table.Row>
    )
}

export default UserRow
