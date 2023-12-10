import Link from "next/link";

interface NotoficationProps {
  date_created: string;
  text: string;
}

interface NotificationListProps {
  isNotificationsOpen: boolean;
  notifications: NotoficationProps[];
}

const NotificationsList: React.FC<NotificationListProps> = ({
  isNotificationsOpen,
  notifications,
}) => {
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate: string = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <div
      className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
        isNotificationsOpen ? "block" : "hidden"
      }`}
    >
      <div className="px-4.5 py-3">
        <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
      </div>

      <ul className="flex h-auto flex-col overflow-y-auto">
        {notifications.map((notification: NotoficationProps, i: number) => {
          return (
            <li key={i}>
              <Link href="/" legacyBehavior>
                <a className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
                  <p className="text-sm">
                    <span className="text-black dark:text-white">
                      {notification.text}
                    </span>
                  </p>
                  <p className="text-xs">
                    {formatDate(notification.date_created)}
                  </p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotificationsList;
