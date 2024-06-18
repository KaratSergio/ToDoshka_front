import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { currentUserThunk } from '@src/redux/auth/thunks';
import { useAppDispatch } from '@src/redux/store';

import Layout from '../Layout/Layout';
import PublicRoute from '@routes/PublicRoute';
import PrivateRoute from '@routes/PrivateRoute';
// pages*
import HomePage from '@pages/HomePage/HomePage';
import AuthPage from '@pages/AuthPage/AuthPage';
import WelcomePage from '@pages/WelcomePage/WelcomePage';
import ScreensPage from '@pages/ScreensPage/ScreensPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
// modal**
import Modal from '../Custom/CustomModal/Modal';
import ModalContent from '../Custom/CustomModal/ModalContent';
import { closeModal } from '@redux/modal/modalSlice';
import { selectModalIsVisible } from '@redux/modal/selectors';

function App() {
  const isVisible = useSelector(selectModalIsVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, []);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />

          <Route element={<PublicRoute />}>
            <Route path="auth/:id" element={<AuthPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage />}>
              <Route path=":boardName" element={<ScreensPage />} />
            </Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <Modal isVisible={isVisible} onClose={handleClose}>
        <ModalContent />
      </Modal>
    </>
  );
}

export default App;
