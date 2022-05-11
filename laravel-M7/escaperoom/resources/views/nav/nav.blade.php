<div class="sidebar close">
    <div class="logo-details">
        <i class='bi bi-door-open'></i>
        <span class="logo_name">CodingLab</span>
    </div>
    <ul class="nav-links">


        <li>
            <a href="/">
                <i class="bi bi-house"></i>
                <span class="link_name">INICI</span>
            </a>
            <ul class="sub-menu blank">
                <li><a class="link_name" href="#">INICI</a></li>
            </ul>
        </li>

        @auth
            @if(Auth::user()->roleID == 1 )
                <li>
                    <a href="/jocsAdmin">
                        <i class="bi bi-dpad-fill"></i>
                        <span class="link_name">JOCS</span>
                    </a>
                    <ul class="sub-menu">
                        <li><a class="link_name" href="/jocsAdmin">JOCS</a></li>
                        <li><a href="/newJoc">NEW JOC</a></li>
                    </ul>
                </li>

                <li>
                    <div class="iocn-link">
                        <a href="/sales">
                            <i class="bi bi-door-closed-fill"></i>
                            <span class="link_name">SALES</span>
                        </a>
                    </div>
                    <ul class="sub-menu">
                        <li><a class="link_name" href="/sales">SALES</a></li>
                        <li><a href="/newSala">NEW SALA</a></li>
                    </ul>
                </li>

                <li>
                    <a href="/allUsers">
                        <i class="bi bi-person-lines-fill"></i>
                        <span class="link_name">ALL USERS</span>
                    </a>
                    <ul class="sub-menu blank">
                        <li><a class="link_name" href="/allUsers">ALL USERS</a></li>
                    </ul>
                </li>


            @endif
            @if(Auth::user()->roleID == 2 )
                <li>
                    <a href="/reserves">
                        <i class="bi bi-controller"></i>
                        <span class="link_name">RESERVA</span>
                    </a>
                    <ul class="sub-menu blank">
                        <li><a class="link_name" href="/reserves">RESERVA</a></li>
                        <li><a  href="/myReserves">LES MEVES RESERVA</a></li>

                    </ul>
                </li>

                    <li>
                        <a href="/myQualify">
                            <i class="bi bi-star-half"></i>
                            <span class="link_name">VALORACIO</span>
                        </a>
                        <ul class="sub-menu blank">
                            <li><a class="link_name" href="/myQualify">VALORACIO</a></li>
                        </ul>
                    </li>
            @endif
            <li>
                <a href="/profile">
                    <i class="bi bi-person-workspace"></i>
                    <span class="link_name">PERFIL</span>
                </a>
                <ul class="sub-menu blank">
                    <li><a class="link_name" href="/profile">PERFIL</a></li>
                </ul>
            </li>
        @endauth
    </ul>
</div>

