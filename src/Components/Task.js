import { Card } from "antd"



export const Task = ({item}) =>{
    return(
        <Card>
            <div className="list-preview"  >
                <h2>{ item.title }</h2>
                <p>Time tracked : { item.time }</p>
            </div>
        </Card>
    )
}