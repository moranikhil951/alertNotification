// Write your code here
import './index.css'
import {RiErrorWarningFill} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notifications">
    <div className="responsive-con">
      <h1 className="alert-heading">Alert Notifications</h1>
      <Notification>
        <div className="flex-con">
          <AiFillCheckCircle className="image-success" />
          <div>
            <h1 className="heading">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="flex-con">
          <MdWarning className="image-error" />
          <div>
            <h1 className="heading">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="flex-con">
          <RiErrorWarningFill className="image-warning" />
          <div>
            <h1 className="heading">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="flex-con">
          <MdInfo className="image-info" />
          <div>
            <h1 className="heading">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
