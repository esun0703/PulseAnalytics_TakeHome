import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        background: #333; 
        color: white; 
        font-weight: bold; 
    }

    td,th {
        padding: 6px; 
        border: 1px solid #ccc; 
        text-align: left; 
    }

   

    tr {
        padding: 5px;
    }

    tr:nth-of-type(odd) {
        background: #eee;
    }
    tr:nth-of-type(even) {
        background: #fff;
    }
`;

const ResultDisplay = ({ data, sortFunction }) => {
    const headers = ["Member", "Type", "Category", "Affiliation", "Title", "State", "Priority"];
    return data?.length > 0 ? (
        <div style={{overflowX: 'scroll'}}>
            <StyledTable>
            <thead>
                <tr>
                    {headers.map((header) => <th className="text-left align-middle">{header}</th>)}
                </tr>
            </thead>
            <tbody>{data.map((row, index) => {
                    return (
                        <tr key={row.member + index}>{
                            Object.keys(row).map(cellValue => {
                            return <td > {row[cellValue]}</td>
                        })}</tr>
                    )
                })}
            </tbody>
        </StyledTable>
        </div>
    ) : <div>No Results</div>
}

export default ResultDisplay
