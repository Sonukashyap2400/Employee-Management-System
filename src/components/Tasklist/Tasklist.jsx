import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'

const Tasklist = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <Accepttask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <Newtask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <Completetask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <Failedtask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default Tasklist