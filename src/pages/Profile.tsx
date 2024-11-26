import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { User, ClipboardList, Bell } from 'lucide-react';

export default function Profile() {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {t('profile.title')}
        </h1>

        <div className="space-y-6">
          {/* Profile Info */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <User className="h-12 w-12 text-blue-600" />
            <div>
              <h2 className="font-semibold text-lg">
                {user?.displayName || t('profile.anonymous')}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>

          {/* Medical History */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <ClipboardList className="h-12 w-12 text-blue-600" />
            <div>
              <h2 className="font-semibold text-lg">{t('profile.medicalHistory')}</h2>
              <p className="text-gray-600">{t('profile.noRecords')}</p>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <Bell className="h-12 w-12 text-blue-600" />
            <div>
              <h2 className="font-semibold text-lg">{t('profile.notifications')}</h2>
              <p className="text-gray-600">{t('profile.noNotifications')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}