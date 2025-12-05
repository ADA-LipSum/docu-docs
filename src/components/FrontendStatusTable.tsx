import React from 'react';
import styles from './FrontendStatusTable.module.css';

export interface OwnerInfo {
    name: string;
    image?: string;
    github_url?: string;
}

export interface Row {
    name: string;
    url: string;
    status: '진행 중' | '시작 전' | '완료';
    note?: string;
    owner?: OwnerInfo;
}

interface Props {
    rows: Row[];
}

const statusColor = {
    '진행 중': '#4096ff',
    '시작 전': '#A9A9A9',
    완료: '#52c41a',
};

export default function FrontendStatusTable({ rows }: Props) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>페이지명</th>
                    <th>URL</th>
                    <th>상태</th>
                    <th>주석</th>
                    <th>담당자</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((r) => (
                    <tr key={r.name}>
                        <td>{r.name}</td>
                        <td>{r.url}</td>
                        <td>
                            <span className={styles.status} style={{ backgroundColor: statusColor[r.status] }}>
                                {r.status}
                            </span>
                        </td>
                        <td>{r.note ?? ''}</td>
                        <td className={styles.ownerCell}>
                            {r.owner?.image && <img src={r.owner.image} className={styles.avatar} />}
                            <a href={r.owner.github_url}>{r.owner?.name}</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
