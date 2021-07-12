import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Gallery } from "./pages/Gallery/Gallery";
import { Design } from "./pages/Design/Design";
import { About } from "./pages/About/About";
import { FavoritePhotos } from "./pages/FavoritePhotos/FavoritePhotos";
import { RecentPhotos } from "./pages/RecentPhotos/RecentPhotos";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { Main } from "./components/Main/Main";
import { SideBar } from "./components/SideBar/SideBar";
import { Content } from "./components/Content/Content";
import { ModalComponent } from "./components/Modal/Modal";
import "./normalize.css";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div className="app">
      <PageHeader />
      <Main>
        <SideBar />
        <Content>
          <Switch location={background || location}>
            <Route exact path="/">
              <Gallery />
            </Route>
            <Route path="/gallery">
              <Gallery setIsModalVisible={setIsModalVisible} />
            </Route>
            <Route path="/design">
              <Design />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/favoritephotos">
              <FavoritePhotos />
            </Route>
            <Route path="/recentphotos">
              <RecentPhotos />
            </Route>
          </Switch>
          {background && (
            <Route path="/gallery/img/:id">
              <ModalComponent
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </Route>
          )}
        </Content>
      </Main>
    </div>
  );
};

export default App;
