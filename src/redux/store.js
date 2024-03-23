import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../app/api/apiSlice';
import userReducer from '@/features/user/userSlice';
import LecturerSlice from '@/redux/slice/lecturers/LecturersSlice';
import CoursesSlice from '@/redux/slice/courses/CoursesSlice';
import SupervisingSlice from '@/redux/slice/supervising/SupervisingSlice';
import ClassSlice from '@/redux/slice/class/ClassSlice';
import SpecSlice from '@/redux/slice/spec/SpecSlice';
import LecturerDepartmentSlice from '@/redux/slice/lecturers/LecturersDepartment';
import StudentNotSupervisingSlice from '@/redux/slice/student-not-super/StudentNotSupSlice';
import StudentSupervisingSlice from '@/redux/slice/studentSupervising/StudentSupSlice';
import LecturerHomeRoomSlice from '@/redux/slice/lecturers/AllLecturerHomeR';
import FalcutySlice from '@/redux/slice/falcuty/FalcutySlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    detail: LecturerSlice,
    courses: CoursesSlice,
    supervising: SupervisingSlice,
    class: ClassSlice,
    spec: SpecSlice,
    lecturerDepartment: LecturerDepartmentSlice,
    studentNotSupervising: StudentNotSupervisingSlice,
    studentSupervising: StudentSupervisingSlice,
    lecturerHomeRoom: LecturerHomeRoomSlice,
    faculty: FalcutySlice,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
