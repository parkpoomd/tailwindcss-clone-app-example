<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- side nav -->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
          <img
            src="spotifyLogo.png"
            class="h-10"
            style="filter: brightness(0) invert(1);"
          />
        </div>
        <div class="mx-2 mb-5">
          <button
            v-for="page in pages"
            :key="page.id"
            @click="setId = page.id"
            :class="
              `w-full focus:outline-none text-sm font-semibold rounded px-3 py-2 flex items-center justify-start ${
                setId === page.id ? 'bg-light text-white' : 'text-lightest'
              }`
            "
          >
            <i class="material-icons mr-3">{{ page.icon }}</i>
            <p>{{ page.name }}</p>
          </button>
        </div>
        <div class="mx-5">
          <h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">
            Playlists
          </h1>
          <button
            class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2"
          >
            <img src="addNew.png" class="h-8 w-8 mr-3" />
            <p class="text-sm text-white font-semibold">Create Playlist</p>
          </button>
          <button
            class="flex items-center justify-start opacity-75 hover:opacity-100"
          >
            <img src="favorite.png" class="h-8 w-8 mr-3" />
            <p class="text-sm text-white font-semibold">Liked Songs</p>
          </button>
          <div class="h-px w-full bg-light my-3"></div>
        </div>
        <div class="mx-5">
          <div class="w-full h-10 overflow-y-scroll">
            <p
              v-for="album in albums"
              :key="album.name"
              class="text-lightest hover:text-white text-sm py-1"
            >
              {{ album.name }}
            </p>
          </div>
          <button
            class="flex items-center justify-start text-lightest hover:text-white py-2"
          >
            <i
              class="material-icons mr-3 rounded-full text-sm border border-lightest"
              >arrow_downward</i
            >
            <p class="text-sm font-semibold">Install App</p>
          </button>
        </div>
        <div class="relative pt-4">
          <div
            class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 p-2 absolute"
          >
            <div class="bg-black rounded-full h-6 w-6">
              <i class="material-icons text-white">keyboard_arrow_down</i>
            </div>
          </div>
          <img src="playing.jpg" />
        </div>
      </div>
      <!-- main content -->
      <div class="w-full h-full relative overflow-y-scroll">
        <!-- header -->
        <div
          class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-dark"
        >
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-white mr-3">
              <i class="material-icons text-3xl">keyboard_arrow_left</i>
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-white">
              <i class="material-icons text-3xl">keyboard_arrow_right</i>
            </button>
          </div>
          <div class="relative">
            <button
              @click="handleShowDropdown"
              class="focus:outline-none bg-light rounded-full py-1 px-2 flex items-center"
            >
              <img src="elon.jpg" class="rounded-full h-6 w-6 mr-2" />
              <p class="text-white font-semibold text-xs mr-3">Elon Muk</p>
              <i class="material-icons text-white">{{
                showDropdown ? 'arrow_drop_up' : 'arrow_drop_down'
              }}</i>
            </button>
            <div
              v-if="showDropdown"
              class="absolute bg-light w-full rounded mt-1"
            >
              <button
                @click="handleShowDropdown"
                class="focus:outline-none w-full text-sm py-2 text-lightest hover text-white border-b border-white opacity-75 hover:opacity-100"
              >
                Account
              </button>
              <button
                @click="handleShowDropdown"
                class="focus:outline-none w-full text-sm py-2 text-lightest hover text-white opacity-75 hover:opacity-100"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
        <!-- cards -->
        <div class="px-6 py-3">
          <div class="flex items-center justify-between">
            <h1
              class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline"
            >
              Recently Played
            </h1>
            <h2
              class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3"
            >
              See All
            </h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div
              v-for="recent in recents"
              :key="recent.title"
              class="p-2 w-48 relative"
            >
              <div
                class=" absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100"
              >
                <div
                  class="bg-green rounded-full h-10 w-10 flex items-center justify-center"
                >
                  <i class="material-icons text-white text-2xl">play_arrow</i>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                <img :src="recent.src" class="h-auto w-full shadow mb-2" />
                <h1 class="text-sm font-semibold text-white tracking-wide">
                  {{ recent.title }}
                </h1>
                <h2 class="text-xs text-lightest tracking-wide pb-5">
                  {{ recent.artist }}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="pl-2">
            <h1
              class="text-2xl font-semibold text-white tracking-wider hover:underline"
            >
              Made for Stephanie
            </h1>
            <h2 class="text-sm text-lightest">
              Get better recommendations the more you listen.
            </h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div
              v-for="recent in recents"
              :key="recent.title"
              class="p-2 w-48 relative"
            >
              <div
                class=" absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100"
              >
                <div
                  class="bg-green rounded-full h-10 w-10 flex items-center justify-center"
                >
                  <i class="material-icons text-white text-2xl">play_arrow</i>
                </div>
              </div>
              <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                <img :src="recent.src" class="h-auto w-full shadow mb-2" />
                <h1 class="text-sm font-semibold text-white tracking-wide">
                  {{ recent.title }}
                </h1>
                <h2 class="text-xs text-lightest tracking-wide pb-5">
                  {{ recent.artist }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- play bar -->
    <div
      class="w-full flex items-center justify-between px-3 bg-light border-t border-dark"
      style="height: 12vh;"
    >
      <div class="flex items-center w-1/4">
        <div>
          <h1 class="text-sm text-white tracking-wide">
            Summer in the City - Remastered
          </h1>
          <h2 class="text-xs text-lightest tracking-wide">
            The Lovin' Spoonfull
          </h2>
        </div>
        <i class="material-icons text-xl text-green mx-4">favorite</i>
        <i class="material-icons text-xl text-lightest"
          >picture_in_picture_alt</i
        >
      </div>
      <div class="flex flex-col justify-center w-2/4 items-center">
        <div class="flex items-center">
          <button class="mx-5 text-lightest hover:text-white">
            <i class="material-icons text-lg">shuffle</i>
          </button>
          <button class=" text-lightest hover:text-white">
            <i class="material-icons text-lg">skip_previous</i>
          </button>
          <button
            @click="play = !play"
            class="focus:outline-none rounded-full h-8 w-8 flex items-center justify-center mx-5 border-lightest border text-lightest hover:text-white"
          >
            <i class="material-icons" v-if="!play">play_arrow</i>
            <i class="material-icons" v-else>pause</i>
          </button>
          <button class=" text-lightest hover:text-white">
            <i class="material-icons text-lg">skip_next</i>
          </button>
          <button class="mx-5 text-lightest hover:text-white">
            <i class="material-icons text-lg">repeat</i>
          </button>
        </div>
        <div class="mt-3 w-3/4 flex items-center justify-center">
          <p class="text-xs text-lightest mr-1">0:28</p>
          <div class="w-full h-1 bg-dark rounded-full flex items-center">
            <div class="h-1 rounded-full bg-green" style="width: 18%;"></div>
            <div class="h-3 w-3 bg-white rounded-full -ml-1 shadow"></div>
          </div>
          <p class="text-xs text-lightest ml-1">2:46</p>
        </div>
      </div>
      <div class="flex items-center justify-end w-1/4">
        <i class="material-icons text-lightest">playlist_play</i>
        <i class="material-icons text-xl text-lightest mx-3"
          >important_devices</i
        >
        <i class="material-icons text-xl text-lightest">volume_up</i>
        <div class="w-20 ml-1 bg-lightest rounded-full h-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { id: 'home', name: 'Home', icon: 'home' },
        { id: 'search', name: 'Search', icon: 'search' },
        { id: 'library', name: 'Your Library', icon: 'bar_chart' }
      ],
      setId: 'home',
      albums: [
        { name: 'drive' },
        { name: 'zhu' },
        { name: 'All New Indie' },
        { name: 'Mellow' },
        { name: 'Classic Road Trip Songs' },
        { name: 'Lana Del Rey Radio' }
      ],
      showDropdown: false,
      recents: [
        { src: 'black_pink.jpg', title: 'Black Pink', artist: 'By Spotify' },
        { src: 'danny.jpg', title: 'Danny', artist: 'By Spotify' },
        { src: 'lower_dens.jpg', title: 'Lower Dens', artist: 'By Spotify' },
        { src: 'dua_lipa.png', title: 'Dua Lipa', artist: 'By Spotify' },
        {
          src: 'taylor_swift.png',
          title: 'Taylor Swift',
          artist: 'By Spotify'
        },
        { src: 'bruno_mars.jpg', title: 'Bruno Mars', artist: 'By Spotify' }
        // { src: 'maroon_5.jpg', title: 'Maroon 5', artist: 'By Spotify' }
      ],
      play: false
    };
  },
  methods: {
    handleShowDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
};
</script>
